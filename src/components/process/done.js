const FinishedNotes = ({ onNext, data, setData }) => {
    console.log(data);
    return (
        <div class="text-center p-4">
            <h1 class="text-4xl font-bold mb-4">Your questions are all done!</h1>
            <p class="text-lg">Head <a href="/tests" class="text-blue-500">here next</a>, happy studying! 😊</p>
        </div>
    );
};

export default FinishedNotes;