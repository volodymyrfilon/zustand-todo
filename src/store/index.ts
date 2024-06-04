import { Store } from '@/types/store';
import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { createTodoSlice } from './todo-slice';

export const useStore = create<Store>()(
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createTodoSlice(...a),
        }))
      ),
      {
        name: 'local-storage',
      }
    )
  )
);
