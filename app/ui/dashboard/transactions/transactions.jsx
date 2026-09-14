// https://youtu.be/cBg6xA5C60s?t=2750
import Image from "next/image";
import React from "react";

const Transactions = () => {
  return (
    <div className="bg-bgSoft p-5 rounded-[10px]">
      <h1 className="mb-5 font-extralight text-textSoft text-xl">
        Latest Transactions
      </h1>

      <table className="w-full p-2.5">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className='flex gap-2.5 items-center'>
                <Image
                  src="/avater1.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
              John Doe
              </div>
            </td>
            <td className={`status pending`}>Pending</td>
            <td>14.02.2024</td>
            <td>$3.20</td>
          </tr>

          <tr>
            <td>
              <div className='flex gap-2.5 items-center'>
                <Image
                  src="/avater1.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
              John Doe
              </div>
            </td>
            <td className={`status done`}>Done</td>
            <td>14.02.2024</td>
            <td>$3.20</td>
          </tr>

          <tr>
            <td>
              <div className='flex gap-2.5 items-center'>
                <Image
                  src="/avater1.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
              John Doe
              </div>
            </td>
            <td className={`status cancelled`}>Cancelled</td>
            <td>14.02.2024</td>
            <td>$3.20</td>
          </tr>

          <tr>
            <td>
              <div className='flex gap-2.5 items-center'>
                <Image
                  src="/avater1.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
              John Doe
              </div>
            </td>
            <td className={`status pending`}>Pending</td>
            <td>14.02.2024</td>
            <td>$3.20</td>
          </tr>

          <tr>
            <td>
              <div className='flex gap-2.5 items-center'>
                <Image
                  src="/avater1.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
              John Doe
              </div>
            </td>
            <td className={`status done`}>Done</td>
            <td>14.02.2024</td>
            <td>$3.20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
