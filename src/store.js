import { writable } from 'svelte/store';
import { poems } from './poems.js'

let notes_local = localStorage.getItem('notes')

export let notes_store = writable(notes_local ? JSON.parse(notes_local) : poems);
export let note_full_store = writable({});
export let menu_store = writable(false);
export let dark_store = writable(false);
