from flask import Flask, request, jsonify
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.models import model_from_json
import pickle

app = Flask(__name__)

# Load model architecture from JSON file
with open("C:/Users/elase/Desktop/Ai model/2.json", "r") as json_file:
    loaded_model_json = json_file.read()
loaded_model = model_from_json(loaded_model_json)

# Load tokenizer
with open('C:/Users/elase/Desktop/Ai model/tokenizer.pickle', 'rb') as handle:
    tokenizer = pickle.load(handle)

# Load model weights from H5 file
loaded_model.load_weights("C:/Users/elase/Desktop/Ai model/3.h5")

class_names = ["Toxic", "Severe Toxic", "Obscene", "Threat", "Insult", "Identity Hate"]

def predict_comment(comment):
    # Prepare the input text
    tokenized_text = tokenizer.texts_to_sequences([comment])
    maxlen = 200
    padded_text = pad_sequences(tokenized_text, maxlen=maxlen)
    
    # Make predictions
    predictions = loaded_model.predict(padded_text)
    percentage_predictions = predictions * 100

    # Determine if any class is predicted with more than 50%
    highest_percentage = 0
    highest_class = None
    for i, percentage in enumerate(percentage_predictions[0]):
        if percentage > 50 and percentage > highest_percentage:
            highest_percentage = percentage
            highest_class = class_names[i]
    
    return highest_class if highest_class else "acceptable"

@app.route('/predict', methods=['POST'])
def predict():
    # Check if request data is provided
    comment = request.data.decode('utf-8')
    if not comment:
        return jsonify({"error": "No comment provided"}), 400

    result = predict_comment(comment)
    if result == "acceptable":
        return jsonify({"response": "accepted"})
    else:
        return jsonify({"response": "rejected"})

if __name__ == '__main__':
    app.run(debug=True)
