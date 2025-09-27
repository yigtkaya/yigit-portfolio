// components/Nav.tsx

const NAV_ITEMS = [
  { id: 'about', title: 'About' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
];

export function Nav({ activeId }: { activeId: string }) {
  return (
    <nav>
      <ul className="mt-16 w-max">
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <a className="group flex items-center py-3" href={`#${item.id}`}>
                {/* The indicator line */}
                <span
                  className={`nav-indicator mr-4 h-px transition-all group-hover:bg-slate-200 group-hover:w-16 
                    ${isActive ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600'}`}
                ></span>
                
                {/* The text */}
                <span
                  className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-slate-200 
                    ${isActive ? 'text-slate-200' : 'text-slate-500'}`}
                >
                  {item.title}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}