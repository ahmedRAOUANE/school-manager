"use client";

import { useState } from "react";

const SwitchBtn = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="btn-group switch">
            <button className={`${active === 0 && "active"}`} onClick={() => setActive(0)}>work week</button>
            <button className={`${active === 1 && "active"}`} onClick={() => setActive(1)}>day</button>
        </div>
    )
}

export default SwitchBtn