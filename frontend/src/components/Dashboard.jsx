const iconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const UsersIcon = () => (
  <svg {...iconProps}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const BuildingIcon = () => (
  <svg {...iconProps}>
    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
    <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
  </svg>
);

const SparkIcon = () => (
  <svg {...iconProps}>
    <path d="m12 3 1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4Z" />
    <path d="M19 17v4M17 19h4" />
  </svg>
);

export default function Dashboard({ students, loading }) {
  const total = students.length;
  const departments = new Set(students.map((s) => s.department.trim().toLowerCase())).size;
  const latest = students[0]; // the API returns newest first

  return (
    <section className="dashboard" aria-label="Summary">
      <article className="stat-card stat-indigo">
        <div className="stat-icon">
          <UsersIcon />
        </div>
        <div className="stat-body">
          <p className="stat-label">registered {total === 1 ? 'student' : 'students'}</p>
          <p className="stat-value" aria-live="polite" data-testid="total-students">
            {loading && total === 0 ? '-' : total}
          </p>
        </div>
      </article>

      <article className="stat-card stat-violet">
        <div className="stat-icon">
          <BuildingIcon />
        </div>
        <div className="stat-body">
          <p className="stat-label">Departments</p>
          <p className="stat-value">{departments}</p>
        </div>
      </article>

      <article className="stat-card stat-pink">
        <div className="stat-icon">
          <SparkIcon />
        </div>
        <div className="stat-body">
          <p className="stat-label">Latest addition</p>
          <p className="stat-value stat-value-text">{latest ? latest.name : 'None yet'}</p>
        </div>
      </article>
    </section>
  );
}
