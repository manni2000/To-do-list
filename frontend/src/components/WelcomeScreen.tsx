
interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export default function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-600 flex flex-col items-center justify-center p-8 text-white">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          Manage What To Do
        </h1>
        <p className="text-lg text-center text-blue-100 mb-12">
          The best way to manage what you have to do, don't forget your plans
        </p>
        <button
          onClick={onGetStarted}
          className="w-full py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-50 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}