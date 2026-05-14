import { makeMobileAuthClient } from '@ielts/auth/expo';
import { API_BASE_URL } from './api-base';

export const authClient = makeMobileAuthClient(API_BASE_URL);
export const { signIn, signUp, signOut, useSession } = authClient;
