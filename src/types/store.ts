import { AuthState } from './auth';
import { TodoSlice } from './todo';

export type Store = TodoSlice & AuthState;
