import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { modalHide } from 'store/modal/actionCreator';
import { selectModal } from 'store/modal/selectors';
import { modalShow } from '../store/modal/actionCreator';
import { ModalType } from '../store/modal/types';
import { useShallowSelector } from './useShallowSelector';

export const useModal = () => {
  const dispatch = useDispatch();
  const { current, active } = useShallowSelector(selectModal);

  const onCloseModal = useCallback(() => {
    dispatch(modalHide());
  }, [dispatch]);

  const onShowModal = useCallback((modal: ModalType) => {
    dispatch(modalShow(modal));
  }, []);

  return {
    current, 
    active,
    onCloseModal,
    onShowModal,
  };
};
