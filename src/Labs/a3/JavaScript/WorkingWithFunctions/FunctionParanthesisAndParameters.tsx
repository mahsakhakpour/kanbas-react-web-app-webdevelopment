function FunctionParanthesisAndParameters () {
    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);
    return (
        <div>
            <h2>Paranthesis and parameters</h2>
            twoSquared = {twoSquared} <br/>
            Square(2) = {twoSquared} <br/>
            threePlusOne = {threePlusOne} <br/>
            plusOne(3) = {threePlusOne} <br/>
        </div>
    )

}
export default FunctionParanthesisAndParameters