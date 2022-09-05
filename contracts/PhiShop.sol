// SPDX-License-Identifier: GPL-2.0-or-later

//                 ____    ____
//                /\___\  /\___\
//       ________/ /   /_ \/___/
//      /\_______\/   /__\___\
//     / /       /       /   /
//    / /   /   /   /   /   /
//   / /   /___/___/___/___/
//  / /   /
//  \/___/

pragma solidity ^0.8.7;
import { IFreeObject } from "./interfaces/IFreeObject.sol";
import { IPremiumObject } from "./interfaces/IPremiumObject.sol";
import { IWallPaper } from "./interfaces/IWallPaper.sol";
import { IBasePlate } from "./interfaces/IBasePlate.sol";

/// @title PhiShop Contract
contract PhiShop {
    /* --------------------------------- ****** --------------------------------- */
    /* -------------------------------------------------------------------------- */
    /*                                   CONFIG                                   */
    /* -------------------------------------------------------------------------- */
    address public immutable freeObjectAddress;
    address public immutable premiumObjectAddress;
    address public immutable wallPaperAddress;
    address public immutable basePlateAddress;
    /* --------------------------------- ****** --------------------------------- */
    /* -------------------------------------------------------------------------- */
    /*                                   EVENTS                                   */
    /* -------------------------------------------------------------------------- */
    event LogShopBuyObject(address sender, address receiverAddress, uint256 buyCount, uint256 buyValue);

    /* -------------------------------------------------------------------------- */
    /*                               INITIALIZATION                               */
    /* -------------------------------------------------------------------------- */
    // initialize contract while deployment with contract's collection name and token
    constructor(
        address _freeObjectAddress,
        address _premiumObjectAddress,
        address _wallPaperAddress,
        address _basePlateAddress
    ) {
        freeObjectAddress = _freeObjectAddress;
        premiumObjectAddress = _premiumObjectAddress;
        wallPaperAddress = _wallPaperAddress;
        basePlateAddress = _basePlateAddress;
    }

    /* --------------------------------- ****** --------------------------------- */
    /* -------------------------------------------------------------------------- */
    /*                               PUBLIC FUNCTION                              */
    /* -------------------------------------------------------------------------- */
    /*
     * @title shopBuyObject
     * @param receiverAddress : receive address
     * @param ftokenIds : free object tokenId list
     * @param ptokenIds : premium object tokenId list
     * @param wtokenIds : wallpaper tokenId list
     */
    function shopBuyObject(
        address receiverAddress,
        uint256[] memory ftokenIds,
        uint256[] memory ptokenIds,
        uint256[] memory wtokenIds,
        uint256[] memory btokenIds
    ) external payable {
        // check if the function caller is not an zero account address
        require(msg.sender != address(0));
        // to prevent bots minting from a contract
        require(msg.sender == tx.origin, "msg sender invalid");

        if (ftokenIds.length != 0) {
            IFreeObject _fobject = IFreeObject(freeObjectAddress);
            _fobject.batchGetFreeObjectFromShop(receiverAddress, ftokenIds);
        }
        if (ptokenIds.length != 0) {
            IPremiumObject _pobject = IPremiumObject(premiumObjectAddress);
            uint256 pPrice = _pobject.getObjectsPrice(ptokenIds);
            _pobject.batchBuyObjectFromShop{ value: pPrice }(receiverAddress, ptokenIds);
        }
        if (wtokenIds.length != 0) {
            IWallPaper _wobject = IWallPaper(wallPaperAddress);
            uint256 wPrice = _wobject.getObjectsPrice(wtokenIds);
            _wobject.batchWallPaperFromShop{ value: wPrice }(receiverAddress, wtokenIds);
        }
        if (btokenIds.length != 0) {
            IBasePlate _bobject = IBasePlate(basePlateAddress);
            uint256 bPrice = _bobject.getObjectsPrice(btokenIds);
            _bobject.batchBasePlateFromShop{ value: bPrice }(receiverAddress, btokenIds);
        }
        emit LogShopBuyObject(
            msg.sender,
            receiverAddress,
            ftokenIds.length + ftokenIds.length + wtokenIds.length + btokenIds.length,
            msg.value
        );
    }
}
