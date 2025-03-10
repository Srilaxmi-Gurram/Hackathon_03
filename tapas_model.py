from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

class TapasProcessor:
    def __init__(self):
        self.tokenizer = TapasTokenizer.from_pretrained("google/tapas-large-finetuned-wtq")
        self.model = TapasForQuestionAnswering.from_pretrained("google/tapas-large-finetuned-wtq")

    def query_csv(self, csv_path: str, question: str):
        df = pd.read_csv(csv_path)
        inputs = self.tokenizer(table=df, queries=[question], padding="max_length", return_tensors="pt")
        outputs = self.model(**inputs)

        predicted_answer_coordinates, _ = self.tokenizer.convert_logits_to_predictions(
            inputs, outputs.logits.detach(), outputs.logits_aggregation.detach()
        )

        result = [df.iloc[row][col] for row, col in predicted_answer_coordinates[0]]
        return {"query": question, "answer": result}
