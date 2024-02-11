import {writable} from 'svelte/store';

function createNotes () {

    let og_notes = [
        {
        "id": 0,
        "text": "add lisää",
        "course": {
        "id": 0,
        "name": "versionhallinta"
        },
        "timestamp": "2022-11-23T13:13:13"
        },
        {
        "id": 1,
        "text": "commit tallenta",
        "course": {
        "id": 0,
        "name": "versionhallinta"
        },
        "timestamp": "2022-11-23T13:33:13"
        },
        {
        "id": 2,
        "text": "push työntää muutokset remoteen",
        "course": {
        "id": 0,
        "name": "versionhallinta"
        },
        "timestamp": "2022-11-24T13:13:13"
        },
        {
        "id": 3,
        "text": "talar du svenska",
        "course": {
        "id": 2,
        "name": "ruotsi"
        },
        "timestamp": "2022-11-22T08:23:12"
        }
       ];

    const noteStore = writable(og_notes);

    const addNote = (newNote) => {
        noteStore.update( (noteStore) => {
            let id = noteStore.length;
            return [...noteStore, {id, ...newNote}];
        });
    };

    return{
        subscribe: noteStore.subscribe,
        add: addNote,
        reset: () => noteStore.set([]),
    };
}

export const noteStore = createNotes();
