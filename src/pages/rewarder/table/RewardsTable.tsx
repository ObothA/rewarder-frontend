import React from 'react';

type reward = {
  customerId: string;
  customerName: string;
  voucherAmount: number;
  voucherValidityDays: number;
};

export default function RewardsTable({
  rewards,
}: {
  rewards: reward[] | null;
}) {
  return (
    <section className='row mt-5'>
      <div className='col-12'>
        {rewards && (
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Customer Name</th>
                <th scope='col'>Voucher Amount</th>
                <th scope='col'>Voucher Validity (days)</th>
              </tr>
            </thead>
            <tbody>
              {rewards.map((rewardDetails, index) => (
                <tr key={rewardDetails?.customerId}>
                  <th>{index + 1}</th>
                  <th>{rewardDetails?.customerName}</th>
                  <th>{rewardDetails?.voucherAmount}</th>
                  <th>{rewardDetails?.voucherValidityDays}</th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
