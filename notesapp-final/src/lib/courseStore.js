import {writable} from 'svelte/store';

function createCourses () {

    let frontti = {
        courseName: "PeepoPogWow",
        courseID: "04",
        notes: 0
    };

    let og_courses = [
        {courseName: "Frontti", courseID: "01"},
        {courseName: "Ruotti", courseID: "02"},
        {courseName: "Webbi", courseID: "03"},
        {...frontti}
    ];

    const { subscribe, set, update } = writable(og_courses);

    return{
        subscribe,
        add: (newCourse) => update((courseStore) => [...courseStore, newCourse]),
        reset: () => set([])
    };
}

export const courseStore = createCourses();