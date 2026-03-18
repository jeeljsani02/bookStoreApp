// user.controller.js ma aa code add karo
export const purchaseBook = async (req, res) => {
    try {
        const { email, bookName } = req.body; // Frontend mathi email ane book nu naam aavse
        
        // Database ma user shodho ane eni 'purchasedBooks' array ma book add karo
        const user = await User.findOneAndUpdate(
            { email: email }, 
            { $push: { purchasedBooks: bookName } }, 
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "Book purchased and saved in DB!", user });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};