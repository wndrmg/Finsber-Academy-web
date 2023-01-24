import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';

import {coursesReducer as courses} from '@src/redux/reducers/courses/courses.reducer';

const rootReducer = combineReducers({
    courses,
});

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
};

export const store = configureStore();
export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
// prettier-ignore
export type TypedThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, AnyAction>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;
export type Selector<S> = (state: RootState) => S;
