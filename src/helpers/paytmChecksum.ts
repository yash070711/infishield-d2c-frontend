import crypto from 'crypto';
export const generateChecksum = (data: Record<string, any>, merchantKey: string): string => {
  const values = Object.values(data).join('|') + '|' + merchantKey;

  return crypto
    .createHash('sha256')
    .update(values)
    .digest('hex');
};

export const verifySignature = (
  data: Record<string, any>,
  merchantKey: string,
  checksum: string
): boolean => {
  const calculatedChecksum = generateChecksum(data, merchantKey);
  return calculatedChecksum === checksum;
};
