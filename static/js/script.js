const { useState } = React;
const h = React.createElement;

function PhaseOneButton({ label, feature, secondary, onStatusChange }) {
    return h('button', {
        className: secondary ? 'secondary' : '',
        type: 'button',
        onClick: () => onStatusChange(`${feature} will be added in a later phase`)
    }, label);
}

function PanelHeading({ title, label, children }) {
    return h('div', { className: 'panel-label' },
        h('h2', null, title),
        children || h('span', { className: 'eyebrow' }, label)
    );
}

function Placeholder({ title, message }) {
    return h('div', { className: 'camera-placeholder' },
        h('div', null, h('strong', null, title), h('span', null, message))
    );
}

function App() {
    const [status, setStatus] = useState('Phase 1 ready');
    const [language, setLanguage] = useState('English');
    const unavailable = (label, feature, secondary) => h(PhaseOneButton, {
        label,
        feature,
        secondary,
        onStatusChange: setStatus
    });

    return h('main', { className: 'shell' },
        h('header', { className: 'topbar' },
            h('div', null,
                h('div', { className: 'eyebrow' }, 'Local communication prototype'),
                h('h1', null, 'Real-Time Sign Language Conversation'),
                h('p', { className: 'subtitle' }, 'A private workspace for connecting signed conversation with spoken language. This Phase 1 prototype establishes the interface before camera and ML features are added.')
            ),
            h('div', { className: 'status', 'aria-live': 'polite' }, status)
        ),
        h('section', { className: 'grid', 'aria-label': 'Conversation workspace' },
            h('article', { className: 'panel' },
                h(PanelHeading, { title: 'Sign to text', label: 'Camera' }),
                h(Placeholder, { title: 'Camera preview will appear here', message: 'Camera access begins in Phase 2.' }),
                h('div', { className: 'actions' }, unavailable('Start camera', 'Camera controls'), unavailable('Stop camera', 'Camera controls', true))
            ),
            h('article', { className: 'panel' },
                h(PanelHeading, { title: 'Recognition', label: 'Preview' }),
                h('dl', { className: 'info-list' },
                    h('div', { className: 'info-row' }, h('dt', null, 'Recognized sign'), h('dd', null, 'Waiting for camera')),
                    h('div', { className: 'info-row' }, h('dt', null, 'Converted text'), h('dd', null, 'Nothing yet')),
                    h('div', { className: 'info-row' }, h('dt', null, 'Confidence'), h('dd', null, 'Not available'))
                ),
                h('div', { className: 'actions' }, unavailable('Speak', 'Text-to-speech'), unavailable('Speech to text', 'Speech-to-text', true))
            ),
            h('article', { className: 'panel' },
                h(PanelHeading, { title: 'Sign representation', label: 'Local media' }),
                h(Placeholder, { title: 'Sign media will appear here', message: 'Local clips are connected in a later phase.' })
            ),
            h('article', { className: 'panel' },
                h(PanelHeading, { title: 'Conversation', children: h('label', null,
                    h('span', { className: 'sr-only' }, 'Language'),
                    h('select', { value: language, onChange: (event) => setLanguage(event.target.value) },
                        h('option', { value: 'English' }, 'English'),
                        h('option', { value: 'Tamil', disabled: true }, 'Tamil (later phase)')
                    )
                ) }),
                h('div', { className: 'transcript' }, 'Your local conversation transcript will appear here.'),
                h('div', { className: 'actions' }, h('button', {
                    className: 'secondary',
                    type: 'button',
                    onClick: () => setStatus('Conversation is already clear')
                }, 'Clear conversation'))
            )
        ),
        h('p', { className:  'footer-note' }, 'Prototype scope: the first model will recognize only the signs it is trained on. No camera or conversation data leaves this computer.')
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(h(App));
