import Constants from './Constants';

export const DEFAULT_SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,

  elevation: 2,
};

export const formatNumber = (balance: number) => {
  const from = Constants.IDIOM === 'EN' ? 'us' : 'ar';
  const currency = Constants.IDIOM === 'EN' ? 'USD' : 'ARS';
  return new Intl.NumberFormat(`${Constants.IDIOM}-${from}`, {
    style: 'currency',
    currency,
  }).format(balance);
};
