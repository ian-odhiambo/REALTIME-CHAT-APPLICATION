# Plan

## Information gathered
- `useLogout` returns `{ loading, logOut }` (note the name `logOut`).
- `LogoutButton` destructures `{ loading, logout }` and uses `onClick={logout}`.
- `MessageContainer` has `const noChatSelected = false;`, so `NoChatSelected` will never render.
- `App.jsx` routing depends on `authUser` from `AuthContext`, which is initialized from `localStorage.authUser`.

## Plan (code update plan at file level)
1. Fix `LogoutButton` to use the correct function name from the hook (`logOut`).
2. (Optional, depending on your expectation) change `noChatSelected` so the message container shows `NoChatSelected` after signup.
   - If you want the current expected UI, we likely set `noChatSelected = true` or drive it from state.
3. Verify by running the frontend and checking:
   - clicking logout clears localStorage.authUser
   - route redirects to `/login` (because `authUser` becomes null)
   - signup navigation shows the message container UI as expected.

## Dependent files to edit
- `frontend/src/components/sidebar/LogoutButton.jsx`
- `frontend/src/components/messages/MessageContainer.jsx` (optional)

## Followup steps
- Run frontend dev server / lint.
- Manually test logout and signup UI.

