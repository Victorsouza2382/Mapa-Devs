import React from 'react';

import './global.css'

function App() {

    return ( 
        <div id="app">
          <anside>
            <strong>Cadastrar</strong>
            <form>
              <div class="input-block">
              <label htmlFor="github_username">Usuário do Github</label>
              <input name="github_username" id="username_github" required />
              </div>
              <div class="input-block">
              <label htmlFor="techs">Tecnologias</label>
              <input name="techs" id="techs" required />
              </div>
              
            <div claas="input-group">
            <div class="input-block">
              <label htmlFor="techs">Latitude</label>
              <input name="techs" id="techs" required />
              </div>
              </div>
            </form>

          </anside>
           <main>

           </main>
           </div>
    );
}

export default App;