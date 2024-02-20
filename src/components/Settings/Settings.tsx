import React from 'react';

type SettingsProps = {
    changeWindow: (value: boolean) => void
}
export const Settings: React.FC<SettingsProps> = ({changeWindow}) => {
    return (
        <div className={'setField'}>

            <div className={'inputField'}>
                <div style={{display: "flex", width: "100%"}}>
                    <div>
                        <span className={'setMax'}>maximum</span>
                        <input/>
                    </div>
                    <div>
                        <button className="button button-primary">+</button>
                        <button className="button button-primary">-</button>
                    </div>
                </div>

                <div style={{display: "flex", width: "100%"}}>
                    <div>
                        <span className={'setMin'}>minimum</span>
                        <input/>
                    </div>

                    <div>
                        <button className="button button-primary">+</button>
                        <button className="button button-primary">-</button>
                    </div>
                </div>
            </div>

            <div className="control-panel settings">
                <button
                    className="button button-primary"
                    onClick={() => changeWindow(false)}
                >save
                </button>
            </div>
        </div>
    );
};