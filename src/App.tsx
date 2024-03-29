import React, { useState } from 'react';
import './App.scss';
import Import from './components/Import';
import Persons from "./components/Persons";

function App() {

  const [persons, setPersons] = useState<string[]>([]);

  const imported = (ps: string[]): void => {
    setPersons(ps);
  }

  return (<>

    <div className="snowflakes" aria-hidden="true">
      <div className="snowflake">
        ❅
      </div>
      <div className="snowflake">
        ❅
      </div>
      <div className="snowflake">
        ❆
      </div>
      <div className="snowflake">
        ❄
      </div>
      <div className="snowflake">
        ❅
      </div>
      <div className="snowflake">
        ❆
      </div>
      <div className="snowflake">
        ❄
      </div>
      <div className="snowflake">
        ❅
      </div>
      <div className="snowflake">
        ❆
      </div>
      <div className="snowflake">
        ❄
      </div>
    </div>
    <div className="App">
      <div className="santa-logo">
        <svg enable-background="new 0 0 475 512.025" viewBox="0 0 475 512.025" xmlns="http://www.w3.org/2000/svg"><circle cx="237.5" cy="274.525" fill="#8cd9f4" r="237.5" /><path d="m47 380.888s-4-33.272 9-54.661 47-20.201 47-20.201h212.524c2.705-23.301 11.613-51.346 38.299-57.002 36.848-7.809 90.961 11.825 118.894 58.426 1.493-10.763 2.283-21.752 2.283-32.926 0-131.168-106.332-237.5-237.5-237.5s-237.5 106.333-237.5 237.501c0 53.175 17.479 102.267 47 141.849z" fill="none" /><path d="m353.823 249.025c-26.686 5.656-35.594 33.701-38.299 57.002h36.476s29 0 40 20.201 9 79.615 9 79.615v40.938c38.067-36.144 64.15-84.775 71.717-139.329-27.933-46.602-82.046-66.236-118.894-58.427z" fill="#7c1118" /><path d="m392 326.228c-11-20.201-40-20.201-40-20.201h-36.476-212.524s-36.154-2.357-47 20.201c-10 20.797-9 54.661-9 54.661v35.486c43.299 58.055 112.508 95.651 190.5 95.651 63.357 0 120.916-24.812 163.5-65.245v-40.938c0-.001 2-59.415-9-79.615z" fill="#d3222f" /><path d="m103 154.025h212v103h-212z" fill="#efd8c5" /><circle cx="144.5" cy="197.525" r="9.5" /><circle cx="206.5" cy="197.525" r="9.5" /><path d="m114 133.025h182s4-21 30-22 37 9 43 16 18 27 18 27 5-90-42-127-117-32-161-9-71 61-70 115z" fill="#d3222f" /><g fill="#fff"><path d="m205.5 122.525h105s5 1 8 5 4.079 31.941 0 35c-4 3-113 2-113 2h-99s-9-1-12-5-2-20.292-2-27c0-3 .766-6.267 4-8 3.707-1.986 11.957-2 16.163-2z" /><circle cx="383" cy="159.025" r="25" /><path d="m102 150.025v136.854c0 23.082 6.391 45.813 19 65.146 15 23 41 46 85 46 39.111 0 64.988-18.963 81.668-40.033 17.939-22.66 27.332-50.914 27.332-79.815v-128.152h-13.972v86h-188.028v-86z" /><circle cx="208" cy="436.025" r="11" /><circle cx="209" cy="479.025" r="11" /></g></svg>
      </div>
      <Import imported={imported} />
      <Persons persons={persons} />
    </div>
  </>
  );
}

export default App;
