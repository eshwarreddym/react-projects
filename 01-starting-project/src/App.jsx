import {useState} from 'react';
import {CORE_CONCEPTS} from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import {EXAMPLES} from "./data"


function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = <p>'Please click a button'</p>;

    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        )}


    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);

    }


    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}/>
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'}
                                   onSelect={() => handleSelect('components')}>Components
                        </TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'}
                                   onSelect={() => handleSelect('jsx')}>JSX
                        </TabButton>
                        <TabButton isSelected={selectedTopic === 'props'}
                                   onSelect={() => handleSelect('props')}>Props
                        </TabButton>
                        <TabButton  isSelected={selectedTopic === 'state'}
                                    onSelect={() => handleSelect('state')}>State
                        </TabButton>
                    </menu>
                    {tabContent}
                </section>

            </main>
        </div>
    );
}

export default App;