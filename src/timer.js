const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
}

function toggle() {
    setIsActive(!isActive);
}

export default Timer