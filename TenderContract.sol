// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TenderContract {
    struct Tender {
        string title;
        string description;
        uint price; // New field for tender price
    }

    Tender[] public tenders;

    function createTender(string memory _title, string memory _description, uint _price) public {
        Tender memory newTender = Tender({
            title: _title,
            description: _description,
            price: _price
        });

        tenders.push(newTender);
    }

    function getTenderDetails() public view returns (Tender[] memory) {
        return tenders;
    }
}
