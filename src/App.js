import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

    return (
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div class="input-block">
                        <label htmlFor="github_username">Usuário do Github</label>
                        <input name="github_username" id="username_github" required/>
                    </div>
                    <div class="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input name="techs" id="techs" required/>
                    </div>

                    <div className="input-group">
                        <div class="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input name="latitude" id="latitude" required/>
                        </div>
                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input name="longitude" id="longitude" required/>
                        </div>
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            </aside>
            <main>
                <ul>
                    <li className={"dev-item"}>
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/44319806?s=460&v=4"
                                 alt="Victor de Souza"/>
                            <div className="user-info">
                                <strong>Victor de Souza</strong>
                                <span>ReactJS, React-Native, node.js</span>
                            </div>
                            <p>Estudante no curso de Análise e Desenvolvimento de Sistemas.</p>
                            <a href="https://github.com/Victorsouza2382">Acessar perfil no Github</a>
                        </header>
                    </li>
                    <li className={"dev-item"}>
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/44319806?s=460&v=4"
                                 alt="Victor de Souza"/>
                            <div className="user-info">
                                <strong>Victor de Souza</strong>
                                <span>ReactJS, React-Native, node.js</span>
                            </div>
                            <p>Estudante no curso de Análise e Desenvolvimento de Sistemas.</p>
                            <a href="https://github.com/Victorsouza2382">Acessar perfil no Github</a>
                        </header>
                    </li>
                    <li className={"dev-item"}>
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/44319806?s=460&v=4"
                                 alt="Victor de Souza"/>
                            <div className="user-info">
                                <strong>Victor de Souza</strong>
                                <span>ReactJS, React-Native, node.js</span>
                            </div>
                            <p>Estudante no curso de Análise e Desenvolvimento de Sistemas.</p>
                            <a href="https://github.com/Victorsouza2382">Acessar perfil no Github</a>
                        </header>
                    </li>
                    <li className={"dev-item"}>
                        <header>
                            <img src="https://avatars2.githubusercontent.com/u/44319806?s=460&v=4"
                                 alt="Victor de Souza"/>
                            <div className="user-info">
                                <strong>Victor de Souza</strong>
                                <span>ReactJS, React-Native, node.js</span>
                            </div>
                            <p>Estudante no curso de Análise e Desenvolvimento de Sistemas.</p><br/><br/>
                            <a href="https://github.com/Victorsouza2382">Acessar o perfil no Github</a>
                        </header>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default App;