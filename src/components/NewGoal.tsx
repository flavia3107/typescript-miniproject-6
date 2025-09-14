import { useRef, FormEvent } from 'react';

interface NewGoalProps {
	onAdd: (text: string, summary: string) => void;
}

export default function NewGoal({ onAdd }: NewGoalProps) {
	const goalRef = useRef<HTMLInputElement>(null);
	const summaryRef = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const enteredGoal = goalRef.current!.value;
		const enteredSummary = summaryRef.current!.value;

		onAdd(enteredGoal, enteredSummary);
		if (enteredGoal && enteredSummary) {
			resetFields()
		}
	}

	const resetFields = () => {
		if (goalRef.current) {
			goalRef.current.value = "";
		}
		if (summaryRef.current) {
			summaryRef.current.value = "";
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<p>
				<label htmlFor="goal">Your goal</label>
				<input id="goal" type="text" ref={goalRef} />
			</p>
			<p>
				<label htmlFor="summary">Short summary</label>
				<input id="summary" type="text" ref={summaryRef} />
			</p>
			<p>
				<button>Add Goal</button>
			</p>
		</form>
	);
}
