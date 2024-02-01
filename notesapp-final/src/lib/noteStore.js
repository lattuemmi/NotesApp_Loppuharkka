import {writable} from 'svelte/store';

function createNotes () {

    let frontti = {
        noteName: "PeepoPogWow",
        noteID: "04",
        text: 0
    };

    let og_notes = [
        {noteName: "Frontti", noteID: "01"},
        {noteName: "Ruotti", noteID: "02"},
        {noteName: "Webbi", noteID: "03"},
        {...frontti}
    ];

    const { subscribe, set, update } = writable(og_notes);

    return{
        subscribe,
        add: (newNotes) => update((noteStore) => [...noteStore, newNotes]),
        reset: () => set([])
    };
}

export const noteStore = createNotes();