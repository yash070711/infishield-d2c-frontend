import crypto from 'crypto';

class PaytmChecksum {
  private static iv: string = '@@@@&&&&####$$$$';
  private static MERCHANTID = "HljcEA87079110044913"
  private static MERCHANTKEY = "TkDzgOXs2_pt3mc2"
  private static PaytmENV= 'securegw-stage.paytm.in';
  private static PaytmWEBSITE= 'WEBSTAGING';
  
  static encrypt(input: string, key: string): string {
    const cipher = crypto.createCipheriv('AES-128-CBC', key, Buffer.from(PaytmChecksum.iv));
    let encrypted = cipher.update(input, 'binary', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
  }

  static decrypt(encrypted: string, key: string): string {
    const decipher = crypto.createDecipheriv('AES-128-CBC', key, Buffer.from(PaytmChecksum.iv));
    let decrypted = decipher.update(encrypted, 'base64', 'binary');
    try {
      decrypted += decipher.final('binary');
    } catch (e) {
    }
    return decrypted;
  }

  static async generateSignature(params: string | Record<string, any>, key: string): Promise<string> {
    if (typeof params !== 'string') {
      params = PaytmChecksum.getStringByParams(params);
    }
    return PaytmChecksum.generateSignatureByString(params, key);
  }

  static verifySignature(params: string | Record<string, any>, key: string, checksum: string): boolean {
    if (typeof params !== 'string') {
      params = PaytmChecksum.getStringByParams(params);
    }
    return PaytmChecksum.verifySignatureByString(params, key, checksum);
  }

  static async generateSignatureByString(params: string, key: string): Promise<string> {
    const salt = await PaytmChecksum.generateRandomString(4);
    return PaytmChecksum.calculateChecksum(params, key, salt);
  }

  static verifySignatureByString(params: string, key: string, checksum: string): boolean {
    const paytm_hash = PaytmChecksum.decrypt(checksum, key);
    const salt = paytm_hash.substr(paytm_hash.length - 4);
    return paytm_hash === PaytmChecksum.calculateHash(params, salt);
  }

  static generateRandomString(length: number): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      crypto.randomBytes((length * 3.0) / 4.0, (err, buf) => {
        if (!err) {
          const salt = buf.toString('base64');
          resolve(salt);
        } else {
          reject(err);
        }
      });
    });
  }

  static getStringByParams(params: Record<string, any>): string {
    const data: Record<string, string> = {};
    Object.keys(params)
      .sort()
      .forEach((key) => {
        data[key] = params[key] !== null && params[key].toLowerCase() !== 'null' ? params[key] : '';
      });
    return Object.values(data).join('|');
  }

  static calculateHash(params: string, salt: string): string {
    const finalString = params + '|' + salt;
    return crypto.createHash('sha256').update(finalString).digest('hex') + salt;
  }

  static calculateChecksum(params: string, key: string, salt: string): string {
    const hashString = PaytmChecksum.calculateHash(params, salt);
    return PaytmChecksum.encrypt(hashString, key);
  }
}

export default PaytmChecksum;
