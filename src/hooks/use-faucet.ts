import { toFundsReq, toUiTokens } from '../utils/transformers';
import { useEffect, useState } from 'react';
import { IReqForm, IRequestFundsDetailsDTO, IToken } from '../models/faucet-models';
import { UNC_TOKEN } from '@/consts';


export const useFaucet = () => {
  const [tokens, setTokens] = useState<IToken[]>([]);
  const [selectedToken, setToken] = useState<IToken>(UNC_TOKEN);

  useEffect(() => {
    const getTokens = async () => {
      try {
        const res = await fetch('/api/faucet/tokens', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const json = await res.json();
        const uiTokens = toUiTokens(json.tokens);
        setTokens([UNC_TOKEN, ...uiTokens]);
      } catch (error) {
        // Do something with the error
      }
    };

    getTokens();
  }, []);

  const requestFunds = async (body: IReqForm) => {
    const fundsReq: IRequestFundsDetailsDTO = toFundsReq(body, selectedToken);

    try {
      const res = await fetch('/api/faucet/tokens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fundsReq)
      });

      return await res.json();
    } catch (error) {
      // Do something with error
    }
  };

  const setSelectedToken = (token: IToken) => setToken(token);
  const resetSelectedToken = () => setToken(UNC_TOKEN);

  return {
    tokens,
    selectedToken,
    resetSelectedToken,
    setSelectedToken,
    requestFunds
  };
};
