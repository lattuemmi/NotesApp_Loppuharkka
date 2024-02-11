import { writable } from 'svelte/store';

function createCourses () {

    let og_courses = [
        {
            "id": 0,
            "name": "versionhallinta"
        },
        {
            "id": 1,
            "name": "java"
        },
        {
            "id": 2,
            "name": "ruotsi"
        },
        {
            "id": 3,
            "name": "ohjelmointi 1"
        }
    ];
       

    const courseStore = writable(og_courses);

    const add_course = (newCourse) => {
        courseStore.update((courses) => {
            let id = courses.length;
            return [...courses, { id, ...newCourse }];
        });
    };

    return {
        subscribe: courseStore.subscribe,
        add: add_course,
        reset: () => courseStore.set([]),
    };
}

export const courseStore = createCourses();
