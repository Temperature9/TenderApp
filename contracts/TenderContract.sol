// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TenderContract {
    struct Tender {
        string title;
        string description;
    }

    Tender[] public tenders;

    function createTender(string memory _title, string memory _description) public {
        Tender memory newTender = Tender({
            title: _title,
            description: _description
        });

        tenders.push(newTender);
    }

    function getTenderDetails() public view returns (Tender[] memory) {
        return tenders;
    }
}
