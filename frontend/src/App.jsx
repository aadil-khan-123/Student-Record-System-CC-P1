import { useCallback, useEffect, useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Dashboard from './components/Dashboard.jsx';
import AddStudent from './components/AddStudent.jsx';
import EditStudent from './components/EditStudent.jsx';
import SearchBar from './components/SearchBar.jsx';
import StudentTable from './components/StudentTable.jsx';
import ConfirmDialog from './components/ConfirmDialog.jsx';
import Notification from './components/Notification.jsx';
import LandingPage from './components/LandingPage.jsx';
import AboutPage from './components/AboutPage.jsx';
import {
  createStudent,
  deleteStudent,
  getStudents,
  updateStudent,
} from './services/api.js';

// The existing dashboard workspace
function DashboardView() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [deleteBusy, setDeleteBusy] = useState(false);
  const [notice, setNotice] = useState(null);

  const dismissNotice = useCallback(() => setNotice(null), []);

  const loadStudents = useCallback(async ({ silent = false } = {}) => {
    if (!silent) setLoading(true);
    try {
      const response = await getStudents();
      setStudents(response.data);
      setLoadError('');
    } catch (err) {
      setLoadError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStudents();
  }, [loadStudents]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return students;
    return students.filter((s) =>
      [s.studentId, s.name, s.email, s.department].some((field) =>
        field.toLowerCase().includes(query)
      )
    );
  }, [students, search]);

  const handleCreate = async (payload) => {
    const response = await createStudent(payload);
    setNotice({
      type: 'success',
      message: response.message || 'Student added successfully.',
    });
    await loadStudents({ silent: true });
  };

  const handleUpdate = async (id, payload) => {
    try {
      const response = await updateStudent(id, payload);
      setNotice({
        type: 'success',
        message: response.message || 'Student updated successfully.',
      });
      setEditing(null);
      await loadStudents({ silent: true });
    } catch (err) {
      if (err.status === 404) await loadStudents({ silent: true });
      throw err;
    }
  };

  const handleDeleteConfirmed = async () => {
    setDeleteBusy(true);
    try {
      const response = await deleteStudent(deleting._id);
      setNotice({
        type: 'success',
        message: response.message || 'Student deleted successfully.',
      });
    } catch (err) {
      setNotice({ type: 'error', message: err.message });
    } finally {
      setDeleteBusy(false);
      setDeleting(null);
    }
    await loadStudents({ silent: true });
  };

  return (
    <Layout>
      <div className="page-head">
        <p className="page-eyebrow">Dashboard</p>
        <h1 className="page-title">Student records</h1>
        <p className="page-sub">Add, search, and manage every student in one place.</p>
      </div>

      <Notification notice={notice} onDismiss={dismissNotice} />

      <Dashboard students={students} loading={loading} />

      <div className="workspace">
        <aside className="workspace-side">
          <AddStudent onCreate={handleCreate} />
        </aside>

        <section className="panel workspace-main" aria-labelledby="list-title">
          <h2 id="list-title" className="panel-title">
            Student register
          </h2>
          <SearchBar
            value={search}
            onChange={setSearch}
            resultCount={filtered.length}
            totalCount={students.length}
          />
          <StudentTable
            students={filtered}
            totalCount={students.length}
            searchText={search}
            loading={loading}
            error={loadError && students.length === 0 ? loadError : ''}
            onRetry={() => loadStudents()}
            onEdit={setEditing}
            onDelete={setDeleting}
          />
          {loadError && students.length > 0 && (
            <p className="inline-warning" role="alert">
              Could not refresh the list: {loadError}{' '}
              <button
                type="button"
                className="link-button"
                onClick={() => loadStudents({ silent: true })}
              >
                Retry
              </button>
            </p>
          )}
        </section>
      </div>

      {editing && (
        <EditStudent
          student={editing}
          onSave={handleUpdate}
          onCancel={() => setEditing(null)}
        />
      )}

      {deleting && (
        <ConfirmDialog
          student={deleting}
          busy={deleteBusy}
          onCancel={() => setDeleting(null)}
          onConfirm={handleDeleteConfirmed}
        />
      )}
    </Layout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/dashboard" element={<DashboardView />} />
    </Routes>
  );
}
