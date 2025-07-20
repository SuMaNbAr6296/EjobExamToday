import React, { useState } from "react";

export default function ChooseSkills() {
    const SKILL_NAMES = ["React", "Angular", "Node", "Vue"];

    const [skills, setSkills] = useState(() => {
        const initial = {};
        for (const name of SKILL_NAMES) initial[name] = false;
        return initial;
    });

    //  Select-All checkbox
    const [selectAll, setSelectAll] = useState(false);

    {/*UseState :=> When you pass a function instead of a plain value,
     React calls that function once, on the first render only.
     This is called lazy initialization; it avoids running potentially expensive setup work on every re-render. */}

    // print after the user hits Submit
    const [output, setOutput] = useState([]);

    function handleSelectAllChange() {
        const nextChecked = !selectAll;
        setSelectAll(nextChecked); {/*This triggers a re-render so the UI checkbox matches the new value */ }

        setSkills((prev) => {
            const updated = { ...prev };
            for (const k in updated) updated[k] = nextChecked; {/*This is how we check all skills when the master box is ticked, 
                or un-check them when it’s unticked—without using "Array.prototype.filter". */}
            return updated;
        });
    }

    function handleSkillChange(skill) {
        setSkills((prev) => {
            const updated = { ...prev, [skill]: !prev[skill] };

            let allNowChecked = true;
            for (const k in updated) if (!updated[k]) allNowChecked = false;
            setSelectAll(allNowChecked);

            return updated;
        });
    }

    /* -------- form submit -------- */

    function handleSubmit(e) {
        e.preventDefault();

        const chosen = [];
        for (const k in skills) if (skills[k]) chosen.push(k);

        setOutput(chosen);
    }


    return (
        <div className="mx-auto max-w-sm font-sans">
            <h3 className="mb-4 text-lg font-semibold">Choose Skills</h3>

            <form onSubmit={handleSubmit} className="space-y-2">
                {/* Select‑all */}
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded accent-indigo-600"
                        checked={selectAll}
                        onChange={handleSelectAllChange}
                    />
                    <span>Select&nbsp;All</span>
                </label>

                {/* Individual skills */}
                {SKILL_NAMES.map(skill => (
                    <label key={skill} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded accent-indigo-600"
                            checked={skills[skill]}
                            onChange={() => handleSkillChange(skill)}
                        />
                        <span>{skill}</span>
                    </label>
                ))}

                <button
                    type="submit"
                    className="mt-2 rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                    Submit
                </button>
            </form>

            {/* Printed result */}
            <div className="mt-4 text-sm">
                {output.length ? (
                    <>
                        <strong>Selected&nbsp;skills:</strong>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {output.map(skill => (
                                <span
                                    key={skill}
                                    className="animate-fade-in rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </>
                ) : (
                    <em className="text-gray-500">No skills selected.</em>
                )}
            </div>
        </div>
    );
}
