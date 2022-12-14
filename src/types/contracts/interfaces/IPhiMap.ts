/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface IPhiMapInterface extends utils.Interface {
  functions: {
    "batchDepositObjectFromShop(string,address,address[],uint256[],uint256[])": FunctionFragment;
    "changePhilandOwner(string,address)": FunctionFragment;
    "create(string,address)": FunctionFragment;
    "ownerOfPhiland(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "batchDepositObjectFromShop"
      | "changePhilandOwner"
      | "create"
      | "ownerOfPhiland"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "batchDepositObjectFromShop",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "changePhilandOwner",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOfPhiland",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchDepositObjectFromShop",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changePhilandOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ownerOfPhiland",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IPhiMap extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPhiMapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    batchDepositObjectFromShop(
      name: PromiseOrValue<string>,
      msgSender: PromiseOrValue<string>,
      contractAddresses: PromiseOrValue<string>[],
      tokenIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changePhilandOwner(
      name: PromiseOrValue<string>,
      caller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    create(
      name: PromiseOrValue<string>,
      caller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ownerOfPhiland(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  batchDepositObjectFromShop(
    name: PromiseOrValue<string>,
    msgSender: PromiseOrValue<string>,
    contractAddresses: PromiseOrValue<string>[],
    tokenIds: PromiseOrValue<BigNumberish>[],
    amounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changePhilandOwner(
    name: PromiseOrValue<string>,
    caller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  create(
    name: PromiseOrValue<string>,
    caller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ownerOfPhiland(
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    batchDepositObjectFromShop(
      name: PromiseOrValue<string>,
      msgSender: PromiseOrValue<string>,
      contractAddresses: PromiseOrValue<string>[],
      tokenIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    changePhilandOwner(
      name: PromiseOrValue<string>,
      caller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    create(
      name: PromiseOrValue<string>,
      caller: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    ownerOfPhiland(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    batchDepositObjectFromShop(
      name: PromiseOrValue<string>,
      msgSender: PromiseOrValue<string>,
      contractAddresses: PromiseOrValue<string>[],
      tokenIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changePhilandOwner(
      name: PromiseOrValue<string>,
      caller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    create(
      name: PromiseOrValue<string>,
      caller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ownerOfPhiland(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    batchDepositObjectFromShop(
      name: PromiseOrValue<string>,
      msgSender: PromiseOrValue<string>,
      contractAddresses: PromiseOrValue<string>[],
      tokenIds: PromiseOrValue<BigNumberish>[],
      amounts: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changePhilandOwner(
      name: PromiseOrValue<string>,
      caller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    create(
      name: PromiseOrValue<string>,
      caller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ownerOfPhiland(
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
