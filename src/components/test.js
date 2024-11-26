import '../questions.css'
import {useEffect, useState} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragItem from './dragitem';
import DropZone from './dropzone';

const fetchdecoderesponses = [
    { name: "rewriting the instruction in the computers memory ", checked: false },
    { name: "decoding an instruction from the computer's memory", checked: false },
    { name: "inputting an instruction into the computer's memory", checked: false },
    { name: "carrying out an action as requested by the instruction", checked: false },
    { name: "fetches an instruction from memory", checked: false },
    { name: "encoding an instruction in the computer's memory", checked: false },
]

const cpuresponses = [
    { name: "The clock Speed", checked: false },
    { name: "The size of the chip", checked: false },
    { name: "The manufacturer of the chip", checked: false },
    { name: "The number of cores", checked: false },
    { name: "The colour of the chip", checked: false },
    { name: "The cache size", checked: false },
]

const rompurpose = [
    { name: "Temporarily stores the data used by programs", checked: false },
    { name: "Provides the computer with extra computing power", checked: false },
    { name: "Loads the operating system when the computer is turned on", checked: false },
    { name: "It is used as it is easy access", checked: false },
]

const differences = [
    { name: "Both are non volatile memory", checked: false },
    { name: "RAM is non-volatile memory and ROM is volatile memory", checked: false },
    { name: "ROM is non-volatile memory and RAM is volatile memory", checked: false },
    { name: "The size of RAM in a computer can be increased but the size of ROM is fixed", checked: false },
    { name: "ROM can write data RAM cannot", checked: false },
    { name: "RAM can write data ROM cannot", checked: false },
    { name: "RAM stores opened programs, ROM does not", checked: false },
    { name: "RAM stores data in GBs and ROM in MBs", checked: false },
    { name: "ROM stores data in GBs and RAM in MBs", checked: false },
]

export default function Test() {

    var q1, q2, q3, q4, q5, q6, q7, q8 = false;
    let score = 0;
    //list for memory

    const nonvolatile = ['hard disk', 'hard drive', 'hdd', 'cd', 'dvd', 'blu-ray', 'usb', 'memory stick', 'solid state drives',
    'ssd', 'cloud storage', 'rom']

    const volatile = ['ram', 'random access memory', 'cache memory']

    /**dropped items*/

    const [droppedItems1, setDroppedItems1] = useState([]);
    const [droppedItems2, setDroppedItems2] = useState([]);
    const [droppedItems3, setDroppedItems3] = useState([]);
    const handleDrop = (item) => {
        setDroppedItems1([]);
                setDroppedItems1((prevItems) => [...prevItems, item]);
                if (item.name.toLowerCase() == "input"){
                    if (q3 == false){
                        score +=1;
                        q3 = true;
                    }
                    console.log('changing background colour')
                    document.getElementById("box1").style.backgroundColor="green";

                }
                else {
                    document.getElementById("box1").style.backgroundColor="white";
                }
    };

    /**Question 1**/

    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {


        if (event.target.value.toLowerCase() == "central processing unit"){
            if (q1 == false){
                score +=1;
                q1 = true;
            }
            document.getElementById("q1").style.backgroundColor = "green";
        }
        setInputValue(event.target.value);
    }
    /** end **/

    /**Question T3**/

    const [t3Value, setT3Value] = useState('');
    const handleT3Change = (event) => {

        if (nonvolatile.includes(event.target.value.toLowerCase())){
            document.getElementById("q4").style.backgroundColor = "green";
            if (q4 == false){
                score +=1;
                q4 = true;
            }
        }
        else {
            document.getElementById("q4").style.backgroundColor = "white";
        }
        setT3Value(event.target.value);
    }
    /** end **/

    /**Question T3A**/

    const [t3aValue, setT3AValue] = useState('');
    const handleT3AChange = (event) => {

        if (volatile.includes(event.target.value.toLowerCase())){
            if (q5 == false){
                score +=1;
                q5 = true;
            }
            document.getElementById("q5").style.backgroundColor = "green";
        }
        else {
            document.getElementById("q5").style.backgroundColor = "white";
        }
        setT3AValue(event.target.value);
    }
    /** end **/
    /**Question T3B**/

    const [t3BValue, setT3BValue] = useState('');
    const handleT3BChange = (event) => {

        if (event.target.value.toLowerCase() == 'read-only memory' || event.target.value.toLowerCase() == 'read only memory'){
            if (q6 == false){
                score +=1;
                q6 = true;
            }
            document.getElementById("q6").style.backgroundColor = "green";
        }
        else {
            document.getElementById("q6").style.backgroundColor = "white";
        }
        setT3BValue(event.target.value);
    }
    /** end **/
    /**Question T3C**/

    const [checkedROM, setCheckedROM] = useState(
        new Array(rompurpose.length).fill(false)
    );

    useEffect(() => {
        if (checkedROM[2] == true){
            document.getElementById("q7").style.backgroundColor = "green";
            if (q7 == false){
                score +=1;
                q7 = true;
            }
        }
        else {
            document.getElementById("q7").style.backgroundColor = "white";
        }
    });

    const [romAnswers, setROMAnswers] = useState(rompurpose);

    const handleRom = (position) => {

        const updatedCheckedState = checkedROM.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedROM(updatedCheckedState);
    }
    /** end **/
    /**Question differences between RAM & ROM**/

    const [differencesRR, setDifferencesRR] = useState(
        new Array(differences.length).fill(false)
    );

    useEffect(() => {
        if (differencesRR[2] == true && differencesRR[5] == true && differencesRR[6] == true && differencesRR[7] == true){
            document.getElementById("q8").style.backgroundColor = "green";
            if (q8 == false){
                score +=1;
                q8 = true;
            }
        }
        else {
            document.getElementById("q8").style.backgroundColor = "white";
        }
    });

    const [difAnswers, setDifAnswers] = useState(differences);

    const handleDifferences = (position) => {

        const updatedCheckedState4 = differencesRR.map((item, index) =>
            index === position ? !item : item
        );
        setDifferencesRR(updatedCheckedState4);
    }
    /** end **/
    const handleDrop2 = (item) => {
        console.log('item.name: '+item.name);
        setDroppedItems2([]);
        setDroppedItems2((prevItems) => [...prevItems, item]);
        if (item.name.toLowerCase() == "output"){
            console.log('changing background colour')
            document.getElementById("box2").style.backgroundColor="green";
        }
        else {
            document.getElementById("box1").style.backgroundColor="white";
        }
    };

    const handleDrop3 = (item) => {
        console.log('item.name3: '+item.name);
        setDroppedItems3([]);
        setDroppedItems3((prevItems) => [...prevItems, item]);
        if (item.name.toLowerCase() == "memory"){
            document.getElementById("box3").style.backgroundColor="green";
        }
        else {
            document.getElementById("box3").style.backgroundColor="white";
        }
    };

    // droppedItems.forEach((item) => {console.log('item: '+JSON.stringify(item))})

    const handleRemoveItem = (index) => {
        const updatedItems = [...droppedItems1];
        updatedItems.splice(index, 1);
        setDroppedItems1(updatedItems);
        document.getElementById('box1').style.backgroundColor = "white";
        document.getElementById('box2').style.backgroundColor = "white";
        document.getElementById('box3').style.backgroundColor = "white";
    };




    /**fetch decode question**/

    const [checkedState, setCheckedState] = useState(
        new Array(fetchdecoderesponses.length).fill(false)
    );

    useEffect(() => {
        if (checkedState[4] == true && checkedState[1] == true && checkedState[2] == true){
            if (q2 == false){
                score +=1;
                q2 = true;
            }
            document.getElementById("q2").style.backgroundColor = "green";
        }
        else {
            document.getElementById("q2").style.backgroundColor = "white";
        }
    });

    const [multiAnswers, setMultiAnswers] = useState(fetchdecoderesponses);

    const handleCheckResponse = (position) => {

        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
    }

    /**CPU Performance**/

    const [cpuChecked, setCPUChecked] = useState(
        new Array(cpuresponses.length).fill(false)
    );

    useEffect(() => {
        if (cpuChecked[0] == true && cpuChecked[3] == true && cpuChecked[5] == true){
            if (q3 == false){
                score = score + 1;
                q3 = true;
            }
            document.getElementById("q3").style.backgroundColor = "green";
        }
        else {
            document.getElementById("q3").style.backgroundColor = "white";
        }
    });

    const [cpuAnswers, setCPUAnswers] = useState(cpuresponses);
    const handleCPUResponse = (position) => {

        const updatedCheckedState1 = cpuChecked.map((item, index) =>
            index === position ? !item : item
        );
        setCPUChecked(updatedCheckedState1);
    }

    /** end **/

    const handleQB1 = (event) => {

        if (event.target.value.toLowerCase() == "central processing unit"){
            document.getElementById("q1answer").innerText = "correct";
        }
        setInputValue(event.target.value);
    }

    useEffect(() => {
        console.log(score);
        if (score == 8){
            document.getElementById('complete').innerText = "Congratulations Full Marks";
    }
    });

    return (
        <div >
            <h2>Task 1</h2>
            <p>Answer the questions below. All of the questions must be green before moving on.</p>
            <p>When everything is green start the next activity.</p>
            <div id="q1" className="questionbox">
                <h3 className="quetion">What does CPU stand for?</h3>
                    <input  type="text"  value={inputValue} onChange={handleChange} />
                <p id="q1answer"></p>
            </div>
            <div class="wrapper">
                <div>
                    <img src="https://res.cloudinary.com/dsfypcapq/image/upload/v1732458872/intelcpu_ehetit.jpg"/>
                </div>
                    <div>
                        <p>This is a CPU. It is found on the motherboard of a computer.</p>
                        <p>The motherboard is an electrical circuit that connects all of the computer's components together.</p>
                    </div>
            </div>
            <div id="q2" className="questionbox">
                <div className="multiplechoice">
                    <h3 className="quetion">What 3 things happen during the FDE cycle?</h3>
                    {multiAnswers.map(({name}, index) => (
                        <li key={index}>
                            <div className="toppings-list-item">
                                <div className="left-section">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={checkedState[index]}
                                        onChange={() => handleCheckResponse(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                            </div>
                        </li>
                    ))
                    }
                    <p id="checked"></p>
                </div>
            </div>
            <div>
                <h2>Task 2</h2>
                <div id="q3" className="questionbox">
                <div className="multiplechoice">
                    <div>
                        <h3 className="quetion">What 3 things effect the performance of a CPU?</h3>
                        {cpuAnswers.map(({name}, index) => (
                            <li key={index}>
                                <div className="toppings-list-item">
                                    <div className="left-section">
                                        <input
                                            type="checkbox"
                                            id={`custom-checkbox-${index}`}
                                            name={name}
                                            value={name}
                                            checked={cpuChecked[index]}
                                            onChange={() => handleCPUResponse(index)}
                                        />
                                        <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                    </div>
                                </div>
                            </li>
                        ))
                        }
                        <p id="cpuchecked"></p>
                    </div>
                </div>
                </div>
                <DndProvider backend={HTML5Backend}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh'
                    }}>
                        <div style={{
                            border: '1px solid #ccc',
                            padding: '20px',
                            borderRadius: '5px'
                        }}>
                            <h3>Drag the correct item to the appropriate box.</h3>

                            <img src="https://res.cloudinary.com/dsfypcapq/image/upload/v1732374088/Screenshot_2024-11-23_at_15.00.56_ksxwxz.png" width="400px" height="200px"/>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>
                                <div style={{
                                    border: '1px solid #ccc',
                                    padding: '10px', borderRadius: '5px'
                                }}>
                                    <h2>Drag Items</h2>
                                    <DragItem name="INPUT" />
                                    <DragItem name="HARD DRIVE" />
                                    <DragItem name="OUTPUT" />
                                    <DragItem name="MONITOR" />
                                    <DragItem name="MEMORY" />
                                    <DragItem name="PROGRAM" />
                                </div>
                                <div id="box1"
                                    style={{
                                    border: '1px solid #ccc',
                                    padding: '10px', borderRadius: '5px'
                                }}>
                                    <h2>Box 1</h2>
                                    <DropZone onDrop={handleDrop} />
                                    {droppedItems1.map((item, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                border: '1px solid #ccc',
                                                padding: '10px',
                                                borderRadius: '5px',
                                                marginTop: '10px',
                                                backgroundColor: 'lightblue',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}>
                                            <p>{item.name}</p>
                                            <button onClick={
                                                () => handleRemoveItem(index)}>
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div id="box2" style={{
                                    border: '1px solid #ccc',
                                    padding: '10px', borderRadius: '5px'
                                }}>
                                    <h2>Box 2</h2>
                                    <DropZone onDrop={handleDrop2} />
                                    {droppedItems2.map((item, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                border: '1px solid #ccc',
                                                padding: '10px',
                                                borderRadius: '5px',
                                                marginTop: '10px',
                                                backgroundColor: 'lightblue',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}>
                                            <p>{item.name}</p>
                                            <button onClick={
                                                () => handleRemoveItem(index)}>
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div id="box3"
                                     style={{
                                    border: '1px solid #ccc',
                                    padding: '10px', borderRadius: '5px'
                                }}>
                                    <h2>Box 3</h2>
                                    <DropZone onDrop={handleDrop3} />
                                    {droppedItems3.map((item, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                border: '1px solid #ccc',
                                                padding: '10px',
                                                borderRadius: '5px',
                                                marginTop: '10px',
                                                backgroundColor: 'lightblue',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                            }}>
                                            <p>{item.name}</p>
                                            <button onClick={
                                                () => handleRemoveItem(index)}>
                                                Remove
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </DndProvider>
            </div>

            <h2>Task 3</h2>
            <div id="q4" className="questionbox">
                <h3 className="quetion">Give an example of a storage device that is non volatile?</h3>
                <input  type="text" onChange={handleT3Change} />
                <p id="t3answer"></p>
            </div>
            <div id="q5" className="questionbox">
                <h3 className="quetion">Give an example of a storage device that is volatile?</h3>
                <input  type="text" onChange={handleT3AChange} />
                <p id="t3aanswer"></p>
            </div>
            <div id="q6" className="questionbox">
                <h3 className="quetion">What does ROM stand for?</h3>
                <input  type="text" onChange={handleT3BChange} />
                <p id="t3banswer"></p>
            </div>
            <div id="q7" className="questionbox">
            <div className="multiplechoice">
                <h3 className="quetion">What is the purpose of ROM (1 Answer)?</h3>
                {romAnswers.map(({name}, index) => (
                    <li key={index}>
                        <div className="toppings-list-item">
                            <div className="left-section">
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={name}
                                    value={name}
                                    checked={checkedROM[index]}
                                    onChange={() => handleRom(index)}
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                        </div>
                    </li>
                ))
                }
                <p id="rom_check"></p>
            </div>
            </div>
            <div id="q8" className="questionbox">
            <div className="multiplechoice">
                <div>
                    <h3 className="quetion">Select 4 differences between RAM and ROM?</h3>
                    {difAnswers.map(({name}, index) => (
                        <li key={index}>
                            <div className="toppings-list-item">
                                <div className="left-section">
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={differencesRR[index]}
                                        onChange={() => handleDifferences(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                            </div>
                        </li>
                    ))
                    }
                    <p id="rr_check"></p>
                </div>
            </div>
        </div>
            <p id="completion"></p>
        </div>
    )

}