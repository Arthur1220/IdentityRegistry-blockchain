// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentityRegistry {
    struct Identity {
        string name;
        string email;
        string phoneNumber;
        string dateOfBirth;
    }

    mapping(address => Identity) private identities;

    event IdentityRegistered(address indexed user);
    event IdentityUpdated(address indexed user);

    // Função para registrar uma nova identidade
    function registerIdentity(
        string memory _name,
        string memory _email,
        string memory _phoneNumber,
        string memory _dateOfBirth
    ) public {
        require(bytes(identities[msg.sender].name).length == 0, "Identity already exists.");

        identities[msg.sender] = Identity(_name, _email, _phoneNumber, _dateOfBirth);

        emit IdentityRegistered(msg.sender);
    }

    // Função para atualizar uma identidade existente
    function updateIdentity(
        string memory _name,
        string memory _email,
        string memory _phoneNumber,
        string memory _dateOfBirth
    ) public {
        require(bytes(identities[msg.sender].name).length != 0, "Identity does not exist.");

        identities[msg.sender] = Identity(_name, _email, _phoneNumber, _dateOfBirth);

        emit IdentityUpdated(msg.sender);
    }

    // Função para recuperar a identidade do usuário
    function getMyIdentity() public view returns (Identity memory) {
        require(bytes(identities[msg.sender].name).length != 0, "Identity does not exist.");

        return identities[msg.sender];
    }

    // Função para recuperar a identidade de qualquer usuário (pública)
    function getIdentity(address _user) public view returns (Identity memory) {
        require(bytes(identities[_user].name).length != 0, "Identity does not exist.");

        return identities[_user];
    }
}