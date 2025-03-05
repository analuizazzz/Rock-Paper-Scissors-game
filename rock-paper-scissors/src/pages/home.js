import React, { useState, useEffect } from 'react'; 
import { ReactComponent as Logo } from "../assets/rock-paper-scissors-master/images/logo.svg";
import { ReactComponent as Rock } from "../assets/rock-paper-scissors-master/images/icon-rock.svg";
import { ReactComponent as Paper } from "../assets/rock-paper-scissors-master/images/icon-paper.svg";
import { ReactComponent as Scissors } from "../assets/rock-paper-scissors-master/images/icon-scissors.svg";
import { ReactComponent as Triangle } from "../assets/rock-paper-scissors-master/images/bg-triangle.svg";
import RulesModal from './modal';
import './home.css';

const choices = ["rock", "paper", "scissors"];

const HomePage = () => {
    const [score, setScore] = useState(12);
    const [userChoice, setUserChoice] = useState(null);
    const [houseChoice, setHouseChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [showRules, setShowRules] = useState(false)

    function handleChoice(choice) {
        setUserChoice(choice);
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setHouseChoice(randomChoice);
    }

    function determineWinner() {
        if (!userChoice || !houseChoice) return;
        if (userChoice === houseChoice) {
            setResult("Draw");
        } else if (
            (userChoice === "rock" && houseChoice === "scissors") ||
            (userChoice === "scissors" && houseChoice === "paper") ||
            (userChoice === "paper" && houseChoice === "rock")
        ) {
            setResult("You Win");
            setScore(score + 1);
        } else {
            setResult("You Lose");
            setScore(score - 1);
        }
    }

    useEffect(() => {
        if (userChoice) {
            setTimeout(() => {
                determineWinner();
            }, 100);
        }
    }, [userChoice, houseChoice]);

    function renderChoice(choice) {
        if (choice === "paper") return <div className='choice-circle-paper'><Paper /></div>
        if (choice === "rock") return  <div className='choice-circle-rock'><Rock /></div>
        if (choice === "scissors") return  <div className='choice-circle-scissors'><Scissors /></div>
        return <div className="circle empty-circle" />;
    }

  
    return (
        <div className='home'>
            <div className='score-view'>
                <Logo className='logo-img' />
                <div className='score'>
                    Score
                    <div className='points'>{score}</div>
                </div>
            </div>
            {!userChoice ? (
                <div className='game'>
                    <Triangle className='triangle' />
                    <div className='circle paper' onClick={() => handleChoice('paper')}><Paper /></div>
                    <div className='circle rock' onClick={() => handleChoice('rock')}><Rock /></div>
                    <div className='circle scissors' onClick={() => handleChoice('scissors')}><Scissors /></div>
                </div>
            ) : (
                <div className='results'>
                    <div className='user-choice-container'>
                        <h2>Você escolheu</h2>
                        {renderChoice(userChoice)}
                    </div>
                    <div className='house-choice-container'>
                        <h2>A casa escolheu</h2>
                        {renderChoice(houseChoice)}
                    </div>
                    <div className='result-text'>
                        <h2>{result}</h2>
                        <button onClick={() => setUserChoice(null)}>Jogar Novamente</button>
                    </div>
                </div>
            )}
              <div className='rules'>
                <button className='rules-button' onClick={() => setShowRules(true)}>Rules</button>
            </div>
            {showRules && <RulesModal closeModal={() => setShowRules(false)} />}
        </div>
    );
};

export default HomePage;
