/*
*   LOGIC BEFORE CHANGING DATE FROM STORE
*/

import $socket from '@/socket-instance';

const saveImage = ( { commit }, img) => {
    // Emit the image (base 64) to socket backend
    $socket.emit('uploadImage', img)
}

const getProfiles = () => {
    // Ask backend for profiles
    $socket.emit('getProfiles')
}


// ACTION CALLED BY BACKEND AUTOMATICALLY (magic 🧙🏻‍♂️)
const socket_profiles = ( { commit }, profiles) => {
    //Save profiles to our store (->mutations)
    commit('SET_PROFILES', profiles)
}

export default {
    saveImage,
    socket_profiles,
    getProfiles
}
