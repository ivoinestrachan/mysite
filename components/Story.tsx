import { useState } from 'react';

const Story = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-5 sm:w-[90%]">
      <p>
        I'm an 19-year-old from the Bahamas, where life has been quite an
        adventure. Raised by my grandmother, I discovered my obsession for chess
        and technology early on by <a className="text-blue-500 underline" href="https://www.bahamaschessfederation.org/carifta-2017.html">competing in chess tournaments in Jamaica</a> and
        the Bahamas, and exploring <a className="text-blue-500 underline" href="https://www.youtube.com/watch?v=zVa_q7CwKRg">game development</a> on Roblox. Despite losing my
        mother at 16 and learning to code using nothing but my <a className="text-blue-500 underline" href="https://www.youtube.com/watch?v=6iqCR_ndnVk">smartphone</a>, I've
        never given up on my dream to create and build amazing projects.
      </p>
      {!isExpanded && (
        <span>
          Growing up without electricity, Wi-Fi, and running water, I faced significant
          disadvantages, yet these challenges only fueled my determination to
          succeed against all odds. 
          <button 
            className="text-blue-500 underline ml-2" 
            onClick={toggleReadMore}>
            Read More
          </button>
        </span>
      )}
      {isExpanded && (
        <div>
          <p>
            Growing up without electricity, Wi-Fi, and running water, I faced significant
            disadvantages, yet these challenges only fueled my determination to
            succeed against all odds.
          </p>
          <div className="mt-5">
            Now, I am on the verge of an incredible opportunity to take the next step in my journey by moving to the United States 
            to continue building my company and participate in an accelerator program called <a href="https://www.joinef.com/" className="text-blue-500 underline">entrepreneur first</a>. This will help me launch my startup and further develop as an entrepreneur. To make this dream a reality, I need your support.
          </div>

          <div className="mt-5">
            <div className="font-bold">Why I Need Your Help</div>
            <ul>
              <li>Paying $1,500 for the Lawyer: This amount will cover the remaining legal fees necessary to start the O-1 Visa process, which allows individuals with extraordinary ability in their field to work in the United States.</li>
              <li className="mt-3">Flight Ticket: The rest of the funds will go toward purchasing a ticket to San Francisco, where I plan to join a startup accelerator program and continue building my company.</li>
            </ul>
          </div>

          <div className="mt-5 mb-5">
            <div className="font-bold">Why It Matters</div>
            <div>
              This is more than just a trip—this is the opportunity of a lifetime. By helping me, you are investing in someone who is determined to rise above adversity, create a thriving business, and inspire others along the way. I believe in building a brighter future, not just for myself but for others who come from underrepresented communities like mine.
            </div>
          </div>

          <div className="sm:block hidden">
            <div className="font-bold">My Full Story</div>
            <iframe
              className="rounded-md sm:block hidden"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NrlT8AIMXR0?si=8QAxeHM1pvTY_Nn-"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <button 
            className="text-blue-500 underline mt-3" 
            onClick={toggleReadMore}>
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Story;
