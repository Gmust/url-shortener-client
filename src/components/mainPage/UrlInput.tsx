import styles from '@styles/mainPage/url-input.module.scss';
import { FaLink } from 'react-icons/fa';
import { Button } from '@components/shared/Button';
import { useStore } from '@nanostores/react';
import { $urls, addUrl } from '@store/urlsStore';
import { $isAuth } from '@store/authStore';
import { useCustomForm } from '../../hooks/useCustomForm';
import { shortenLinkValidator } from '@utils/validators/shorten-link';
import { z } from 'zod';
import { FormHookErrorMessage } from '@components/shared/FormHookErrorMessage';
import { useToast } from '../../hooks/useToast';
import { ToastList } from '@components/shared/toast/ToastList';
import { ToastPositions, ToastTypes } from '../../types/toast';
import { AxiosError } from 'axios';
import { MdError } from 'react-icons/md';
import { UrlsService } from '../../service/urls';
import { VscVerified } from 'react-icons/vsc';

type form = z.infer<typeof shortenLinkValidator>

export const UrlInput = () => {

  const {
    errors,
    isDisabled,
    isLoading,
    setIsLoading,
    reset,
    register,
    handleSubmit,
  } = useCustomForm(shortenLinkValidator);

  const urls = useStore($urls);
  const isAuth = useStore($isAuth);
  const { toasts, addToast, removeToast } = useToast();

  const onSubmit = async (data: form) => {
    setIsLoading(true);
    try {
      if (isAuth) {

      } else {
        if (urls.length >= 5) {
          addToast({
            removing: true,
            headingText: 'Urls limit exceeded',
            message: 'Your urls limit exceeded, create an account to get around that limit',
            type: ToastTypes.Warning,
          });
        } else {
          const response = await UrlsService.shortenUrl({ originalUrl: data.link });
          addUrl(response.url);
          addToast({
            removing: true,
            message: response.message,
            type: ToastTypes.Success,
            Icon: VscVerified,
          });
          reset();
        }
      }
    } catch (e) {
      console.log(e instanceof AxiosError);
      if (e instanceof AxiosError) {
        addToast({
          removing: true,
          message: e.response.data.message,
          headingText: e.response.data.error,
          type: ToastTypes.Error,
          Icon: MdError,
        });
      } else {
        addToast({
          removing: true,
          message: 'Something went wrong',
          headingText: 'Server Error',
          type: ToastTypes.Error,
          Icon: MdError,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.urlInputWrapper} style={{ marginBottom: '10px' }}>
        <FaLink className={styles.icon} />
        <input placeholder="Enter your link here..." {...register('link')} />
        <Button>
          Shorten now!
        </Button>
      </form>
      <FormHookErrorMessage error={errors.link} />
      <ToastList position={ToastPositions.TopLeft} removeToast={removeToast} data={toasts} />
    </>
  );
};

