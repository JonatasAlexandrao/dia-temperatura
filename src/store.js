/*import { readable } from "svelte/store";

function currentTime() {
  const hours = new Date().getHours()
  const minutes = new Date().getMinutes()

  return `${hours}:${minutes}`
}

export const time = readable( currentTime(), function (set) {

  setInterval(() => { set(currentTime()); }, 1000)

} );*/

import { writable } from "svelte/store";

export const activeSettings = writable(false)






