import { Store } from '@/types/store';
import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createAuthSlice } from './auth-slice';
import { createTodoSlice } from './todo-slice';

export const useStore = create<Store>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createTodoSlice(...a),
          ...createAuthSlice(...a),
        }))
      ),
      {
        name: 'local-storage',
      }
    )
  )
);
