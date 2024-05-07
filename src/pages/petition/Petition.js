import "./Petition.css";
import { useState, useEffect } from "react";
import { getNames, addName } from "../../data";

function Petition() {
    const [value, setValue] = useState("");
    const [names, setNames] = useState([]);

    useEffect(() => {
        retrieveNames();
    }, []);

    const retrieveNames = async () => {
        const names = await getNames();
        setNames(names);
    }

    const updateValue = e => {
        setValue(e.target.value);
    }

    const submitForm = () => {
        if (value !== "") {
            addName(value);
            setNames([...names, value]);
            setValue("");
        }
    }

    return (<div id="petition">
        <p id="petition-text">
            <pre>   </pre>In the novel 1984, George Orwell envisions a world devoid of privacy and individuality. In the story, the population is constantly monitored and is held in check by the fear of intense punishment whenever they even slightly step out of line. In the real world, it would be difficult for any party or organization to reach this power level without facing severe resistance from citizens. However, if an organization were to watch people without their knowledge or consent, they could potentially gain Orwellian levels of power unbeknownst to the general population. In a world where technologies are created every day and where companies can learn more about your life than your own family members, it is more important than ever that we stand up for our fundamental human right to privacy.<br /><br />
            <pre>   </pre>At the beginning of 2024, Reddit announced that it was selling access to its collection of user-generated data to several large artificial intelligence companies, including Google (Dave). This transaction is just one instance of data’s transformation into a deadly weapon companies pay hundreds of millions for. As companies become more and more capable of leveraging Orwellian powers, the urgency for regulations on the collection and usage of data grows equally. Even back in 2012, public panic erupted in response to a Forbes article claiming that Target had developed an algorithm that could accurately predict if a customer was pregnant (Hill). A decade ago, companies were already starting to identify extremely intimate details in peoples’ lives, such as pregnancy, to deliver customized advertisements and coupons to their targets. Imagine what Target knows about you now.<br /><br />
            <pre>   </pre>In the United States, there are currently no detailed federal data privacy laws and only a few states are just beginning to develop regulations controlling what companies can do with user data (Halladay). Hundreds of millions of consumers are powerless against corporate manipulation through their data. It is crucial to establish regulations that protect consumers of digital products.<br /><br />
            <pre>   </pre>A complete digital data privacy law would have to address at minimum direct data collection, data surveillance, data sharing, and data usage. The specific content of the law would define limits to how companies can collect, use, and share data in different situations. It would also discuss the interactions between firms and consumers, and establish requirements for businesses to communicate their methods, purposes, and policies relating to users’ data.<br /><br />
            <pre>   </pre>We must decide upon an appropriate balance of power between technology companies and their customers. We are entering a new era of technology with thrilling possibilities for novel developments, but the threat of complete corporate surveillance and control also looms. If we don’t act with urgency, we risk losing what makes us human: the ability to choose a life for ourselves.<br /><br />
            <pre>   </pre>Sign to the right to save humanity from sacrificing itself for the sake of technology.</p>
        <div id="petition-signing">
            <h1>Sign Here</h1>
            <div id="sign-form">
                <input id="signature-input" value={value} onChange={updateValue} type="text" placeholder="Your Name Here" autoComplete="off"/>
                <button id="signature-submit" onClick={submitForm}>Sign</button>
            </div>
        </div>
        <div id="signatures">
            <h1>Signatures:</h1>
            <div id="names">{names.map(name => { return <li className="signature">{name}</li> })}</div>
        </div>
    </div>);
}

export default Petition;