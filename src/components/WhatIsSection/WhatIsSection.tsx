function WhatIsSection() {
  return (
    <section
      className="mx-auto max-w-screen-xl text-start min-h-screen mb-44"
      id=""
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="scroll-m-20 text-4xl font-bold tracking-tight transition-colors first:mt-0">
          What is Compound Interest
        </h2>
        <p className="leading-7 max-w-3xl text-gray-500 [&:not(:first-child)]:mt-6">
          Compound interest is a financial concept used in economics and finance
          to calculate the growth of an investment or debt over time. Instead of
          calculating interest only on the initial capital, as in simple
          interest, compound interest calculates interest on both the initial
          capital and previously accrued interest. This leads to exponential
          growth in the investment or debt over time.
        </p>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight [&:not(:first-child)]:mt-6">
          Example
        </h3>
        <p className="leading-7 max-w-3xl text-gray-500 [&:not(:first-child)]:mt-6">
          Let's say you have $1,000, and you invest it in a savings account that
          pays an annual interest rate of 5%. At the end of the first year, you
          will earn $50 in interest (1,000 * 0.05). You will now have $1,050 in
          your account. In the second year, you will earn a 5% interest not only
          on your initial investment of $1,000 but also on the $50 in interest
          accrued from the first year. So, you will earn $52.50 in interest
          (1,050 * 0.05) and have a total of $1,102.50 in your account at the
          end of the second year. Compound interest causes your investment to
          grow faster over time.
        </p>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight [&:not(:first-child)]:mt-6">
          Compound Interest on the Biology
        </h3>
        <p className="leading-7 max-w-3xl text-gray-500 [&:not(:first-child)]:mt-6">
          Compound interest can also be applied to population growth in biology.
          For example, if you have a population of bacteria that doubles every
          hour, the number of bacteria will increase exponentially over time. If
          you start with 100 bacteria, after one hour, you will have 200, then
          400 after two hours, and so on. This is because each generation of
          bacteria includes the bacteria from the previous generation, leading
          to exponential growth.
        </p>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight [&:not(:first-child)]:mt-6">
          Curiosity
        </h3>
        <p className="leading-7 max-w-3xl text-gray-500 [&:not(:first-child)]:mt-6">
          A curious example of compound interest is found in the legend of
          chess. It is said that the inventor of chess presented the game to an
          Indian emperor as a gift. The emperor was so impressed that he offered
          the inventor any reward he wanted. The inventor simply asked for
          grains of rice, using a formula that involved doubling the amount of
          rice on each square of the chessboard, starting with one grain on the
          first square. As the squares advanced, the amount of rice required
          grew exponentially. In the end, the emperor could not fulfill the
          demand because the total amount of rice required was astronomical,
          thus illustrating the concept of exponential growth through compound
          interest. These examples illustrate how compound interest is a
          powerful force in economics, biology, and other fields, where growth
          is based on the accumulation of interest or multiplicative factors
          over timey
        </p>
      </div>
    </section>
  );
}
export default WhatIsSection;
