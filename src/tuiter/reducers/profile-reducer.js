import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {
        name: 'Andrew Santiago',
        handle: 'andrewsantiago',
        profilePicture: 'profile-picture.jpeg',
        bannerPicture: 'image-8.jpeg',
        bio: '',
        website: 'github.com/santiagoa50',
        location: 'Boston, MA',
        dateOfBirth: '1/31/1999',
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
