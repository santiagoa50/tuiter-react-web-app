import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {
        name: 'Norrec Nieh',
        handle: 'tyrannorrec',
        profilePicture: 'profile-picture.jpeg',
        bannerPicture: 'image-8.jpeg',
        bio: 'Theology, philosophy, cybersecurity, martial arts. Matthew 7:13',
        website: 'github.com/tyrannorrec',
        location: 'Boston, MA',
        dateOfBirth: '9/14/1993',
        dateJoined: '4/2019',
        followingCount: 340,
        followersCount: 223,
        numOfTuits: 117,
        editingDOB: false
    }
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        updateProfile(state, action) {
            state.currentUser = action.payload
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
