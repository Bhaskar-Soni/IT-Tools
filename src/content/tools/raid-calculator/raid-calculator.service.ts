import { translate as t } from '@/plugins/i18n.plugin';

export { raidCalculations };

interface RaidType {
  about: string
  requirements: string
  validate(num: number, size: number, stripeSize: number): boolean
  capacity(num: number, size: number, stripeSize: number, unit: number): number
  efficiency(num: number, stripeSize: number): number
  fault(num: number, size: number, unit: number): string
}

const raidCalculations: { [key: string]: RaidType } = {
  raid_0: {
    about: '>-',
    requirements: 'RAID 0 requires at least 1 disk',
    validate(num: number, _size: number, _stripeSize: number) {
      return num > 1;
    },
    capacity(num: number, size: number, _stripeSize: number, unit: number) {
      // total disks * size
      return (num * size) * unit;
    },
    efficiency(_num: number, _stripeSize: number) {
      // uses 100% of space
      return 100;
    },
    fault(_num: number, _size: number, _unit: number) {
      return 'None';
    },
  },
  raid_1: {
    about: '>-',
    requirements: 'RAID 1 requires at least 1 disk',
    validate(num: number, _size: number, _stripeSize: number) {
      return num > 1;
    },
    capacity(num: number, size: number, stripeSize: number, unit: number) {
      // total size is size of a single drive
      return size * unit;
    },
    efficiency(num: number, _stripeSize: number) {
      // 1/N
      return (1 / num) * 100;
    },
    fault(num: number, _size: number, _unit: number) {
      // FT = total - 1
      return t('tools.raid-calculator.text.num-1-drive-failures', [num - 1]);
    },
  },
  raid_5: {
    about: '>-',
    requirements: 'RAID 5 requires at least 3 disks',
    validate(num: number, _size: number, _stripeSize: number) {
      return num >= 3;
    },
    capacity(num: number, size: number, stripeSize: number, unit: number) {
      // (N-1) * S (one drive for parity)
      return ((num - 1) * size) * unit;
    },
    efficiency(num: number, _stripeSize: number) {
      // 1 - (1/N)
      return (1 - (1 / num)) * 100;
    },
    fault(_num: number, _size: number, _unit: number) {
      // always 1 failure
      return '1 drive failure';
    },
  },
  raid_6: {
    about: '>-',
    requirements: 'RAID 6 requires at least 4 disks',
    validate(num: number, _size: number, _stripeSize: number) {
      return num >= 4;
    },
    capacity(num: number, size: number, stripeSize: number, unit: number) {
      // (N-2) * S (2 parity)
      return ((num - 2) * size) * unit;
    },
    efficiency(num: number, _stripeSize: number) {
      // 1 - (2/N)
      return (1 - (2 / num)) * 100;
    },
    fault(_num: number, _size: number, _unit: number) {
      // always 2 drive failures
      return '2 drive failures';
    },
  },
  raid_7: {
    about: '>-',
    requirements: 'RAID 7 requires at least 5 disks',
    validate(num: number, _size: number, _stripeSize: number) {
      return num >= 5;
    },
    capacity(num: number, size: number, stripeSize: number, unit: number) {
      // (N-3) * S (3 parity)
      return ((num - 3) * size) * unit;
    },
    efficiency(num: number, _stripeSize: number) {
      // 1 - (3/N)
      return (1 - (3 / num)) * 100;
    },
    fault(_num: number, _size: number, _unit: number) {
      // always 3 drive failures
      return '3 drive failures';
    },
  },
  raid_10: {
    about: '>-',
    requirements: 'RAID 10 requires an even number of at least 4 disks',
    validate(num: number, _size: number, _stripeSize: number) {
      return num >= 4 && num % 2 === 0;
    },
    capacity(num: number, size: number, stripeSize: number, unit: number) {
      // Total disks (stripe)/2 (mirror)
      return ((num * size) / 2) * unit;
    },
    efficiency(_num: number, _stripeSize: number) {
      // 1/2 (1/strips per stripe, 2 in this case)
      return 50;
    },
    fault(_num: number, _size: number, _unit: number) {
      // one per mirror
      return '1 drive failure per mirrored set';
    },
  },
  raid_50: {
    about: '>-',
    requirements: '>-',
    validate(num: number, size: number, stripeSize: number) {
      return num >= 6 && stripeSize >= 3 && num % stripeSize === 0;
    },
    capacity(num: number, size: number, stripeSize: number, unit: number) {
      // RAID 5 per stripe
      const perStripe = ((stripeSize - 1) * size) * unit;

      // sum each stripe
      return perStripe * (num / stripeSize);
    },
    efficiency(num: number, stripeSize: number) {
      // 1 - (1 / strips per stripe)
      return (1 - (1 / stripeSize)) * 100;
    },
    fault(_num: number, _size: number, _unit: number) {
      // one per set
      return '1 drive failure per RAID 5 set';
    },
  },
  raid_60: {
    about: '>-',
    requirements: '>-',
    validate(num: number, size: number, stripeSize: number) {
      return num >= 8 && stripeSize >= 4 && num % stripeSize === 0;
    },
    capacity(num: number, size: number, stripeSize: number, unit: number) {
      // RAID 6 per stripe
      const perStripe = ((stripeSize - 2) * size) * unit;

      // sum each stripe
      return perStripe * (num / stripeSize);
    },
    efficiency(num: number, stripeSize: number) {
      // 1 - (2 / strips per stripe)
      return (1 - (2 / stripeSize)) * 100;
    },
    fault(_num: number, _size: number, _unit: number) {
      // 2 per set
      return '2 drive failures per RAID 6 set';
    },
  },
  raid_70: {
    about: '>-',
    requirements: '>-',
    validate(num: number, size: number, stripeSize: number) {
      return num >= 10 && stripeSize >= 5 && num % stripeSize === 0;
    },
    capacity(num: number, size: number, stripeSize: number, unit: number) {
      // RAID 7 per stripe
      const perStripe = ((stripeSize - 3) * size) * unit;

      // sum each stripe
      return perStripe * (num / stripeSize);
    },
    efficiency(num: number, stripeSize: number) {
      // 1 - (3 / strips per stripe)
      return (1 - (3 / stripeSize)) * 100;
    },
    fault(_num: number, _size: number, _unit: number) {
      // 2 per set
      return '3 drive failures per RAID 7 set';
    },
  },
};
